import { useEffect, useMemo, useState } from 'react'
import { getProgram } from '../services/handbookService'
import { getUnits } from '../services/curriculumService'
import { getCareers } from '../services/careerService'
import { getAnnouncements } from '../services/announcementService'
import { addBookmark, getBookmarks, removeBookmark } from '../services/bookmarkService'

export default function useAppController() {
  const [screen, setScreen] = useState('home')
  const [program, setProgram] = useState(null)
  const [units, setUnits] = useState([])
  const [careers, setCareers] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [selectedUnit, setSelectedUnit] = useState(null)
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('All')
  const [semester, setSemester] = useState('All')
  const [loading, setLoading] = useState(true)

  async function loadData() {
    setLoading(true)
    try {
      const [p, u, c, a, b] = await Promise.all([
        getProgram(), getUnits(), getCareers(), getAnnouncements(), getBookmarks()
      ])
      setProgram(p.data)
      setUnits(u.data)
      setCareers(c.data)
      setAnnouncements(a.data)
      setBookmarks(b.data.map(x => x.unitId))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadData() }, [])

  const filteredUnits = useMemo(() => units.filter(unit => {
    const q = query.toLowerCase()
    const matchesQuery = !q || unit.code.toLowerCase().includes(q) || unit.title.toLowerCase().includes(q) || unit.pathway.toLowerCase().includes(q)
    const matchesYear = year === 'All' || Number(year) === unit.year
    const matchesSemester = semester === 'All' || Number(semester) === unit.semester
    return matchesQuery && matchesYear && matchesSemester
  }), [units, query, year, semester])

  async function toggleBookmark(unitId) {
    if (bookmarks.includes(unitId)) {
      await removeBookmark(unitId)
      setBookmarks(prev => prev.filter(id => id !== unitId))
    } else {
      await addBookmark(unitId)
      setBookmarks(prev => [...prev, unitId])
    }
  }

  function openUnit(unit) {
    setSelectedUnit(unit)
    setScreen('unitDetails')
  }

  return { screen, setScreen, program, units, careers, announcements, bookmarks, selectedUnit, query, setQuery, year, setYear, semester, setSemester, loading, filteredUnits, toggleBookmark, openUnit, reload: loadData }
}
