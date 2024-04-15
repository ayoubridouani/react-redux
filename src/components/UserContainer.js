import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer(props) {
  const {users, fetchUsers} = props
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const {loading, data, error} = users

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Users List</h1>
      <div>{loading && (<div>Loading...</div>)}</div>
      <div>{data && data.data && data.data.map((user) => <p key={user.id}>{user.name}</p>)}</div>
      <div>{error && (<div>.error</div>)}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)