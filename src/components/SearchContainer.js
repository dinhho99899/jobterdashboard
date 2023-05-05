import { FormRow, FormRowSelect } from './index'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useMemo } from 'react'
import { handleSearchInput, clearFilters } from '../featured/job/allJobsSlice'
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    if (isLoading) return
    const name = e.target.name
    const value = e.target.value
    dispatch(handleSearchInput({ name, value }))
  }
  const debounce = () => {
    let timeoutId
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const name = e.target.name
        const value = e.target.value
        dispatch(handleSearchInput({ name, value }))
      }, 1000)
    }
  }
  // eslint-disable-next-line
  const optimizedDebounce = useMemo(() => debounce(), [])
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('')
    dispatch(clearFilters())
  }
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
