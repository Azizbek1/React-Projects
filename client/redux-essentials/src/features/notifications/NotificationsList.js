import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'
import classnames from 'classnames'

import { selectAllUsers } from '../users/usersSlice'
import {
  selectAllNotifications,
  allNotificationsRead
} from './notificationsSlice'

export const NotificationsList = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map((n) => {
    const date = parseISO(n.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find((u) => u.id === n.user) || {
      name: 'Unknown User'
    }

    const notificationClassname = classnames('notification', {
      new: n.isNew
    })

    return (
      <div key={n.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b> {n.message}
        </div>
        <div title={n.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    )
  })

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}
