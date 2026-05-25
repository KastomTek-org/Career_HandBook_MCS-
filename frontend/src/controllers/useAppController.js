import { useEffect, useMemo, useState } from "react";
import { initialAppState } from "../models/appModel";
import { api } from "../services/api";

export function useAppController() {
  const [state, setState] = useState(initialAppState);

  const setView = (view) => setState((s) => ({ ...s, currentView: view, error: "" }));
  const setSearchTerm = (searchTerm) => setState((s) => ({ ...s, searchTerm }));
  const setYearFilter = (yearFilter) => setState((s) => ({ ...s, yearFilter }));
  const setSemesterFilter = (semesterFilter) => setState((s) => ({ ...s, semesterFilter }));

  async function loadInitialData() {
    try {
      setState((s) => ({ ...s, loading: true }));
      const [program, entry, units, careers, announcements, bookmarks] = await Promise.all([
        api.get("/handbook/program"),
        api.get("/handbook/entry-requirements"),
        api.get("/curriculum/units"),
        api.get("/careers"),
        api.get("/announcements"),
        api.get("/bookmarks"),
      ]);
      setState((s) => ({
        ...s,
        program: program.data,
        entryRequirements: entry.data,
        units: units.data,
        careers: careers.data,
        announcements: announcements.data,
        bookmarks: bookmarks.data,
        loading: false,
      }));
    } catch (error) {
      setState((s) => ({ ...s, loading: false, error: "Unable to load app data." }));
    }
  }

  async function login(email, password) {
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("mcs_token", response.data.token);
      setState((s) => ({ ...s, admin: response.data.user, currentView: "admin" }));
    } catch {
      setState((s) => ({ ...s, error: "Invalid admin login." }));
    }
  }

  async function addAnnouncement(formData) {
    const response = await api.post("/announcements", formData);
    setState((s) => ({ ...s, announcements: [response.data, ...s.announcements] }));
  }

  async function toggleBookmark(unitCode) {
    const response = await api.post("/bookmarks/toggle", { unitCode });
    setState((s) => ({ ...s, bookmarks: response.data }));
  }

  function openUnit(unit) {
    setState((s) => ({ ...s, selectedUnit: unit, currentView: "unitDetails" }));
  }

  const filteredUnits = useMemo(() => {
    return state.units.filter((unit) => {
      const q = state.searchTerm.toLowerCase();
      const matchesSearch = unit.code.toLowerCase().includes(q) || unit.title.toLowerCase().includes(q) || unit.pathway.toLowerCase().includes(q);
      const matchesYear = state.yearFilter === "All" || unit.year === Number(state.yearFilter);
      const matchesSemester = state.semesterFilter === "All" || unit.semester === Number(state.semesterFilter);
      return matchesSearch && matchesYear && matchesSemester;
    });
  }, [state.units, state.searchTerm, state.yearFilter, state.semesterFilter]);

  useEffect(() => {
    loadInitialData();
  }, []);

  return {
    state,
    filteredUnits,
    setView,
    setSearchTerm,
    setYearFilter,
    setSemesterFilter,
    openUnit,
    toggleBookmark,
    login,
    addAnnouncement,
  };
}
