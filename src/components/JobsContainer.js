import React, { useEffect } from 'react'
import Loading from './Loading'
import Wrapper from '../assets/wrappers/JobsContainer'
import Job from './Job'
import PageBtnContainer from './PageBtnContainer'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../featured/job/allJobsSlice'
const JobsContainer = () => {
  const dispatch = useDispatch()
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)
  useEffect(() => {
    dispatch(getAllJobs())
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  if (jobs.length === 0)
    return (
      <Wrapper>
        <h2>No job to display</h2>
      </Wrapper>
    )
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
