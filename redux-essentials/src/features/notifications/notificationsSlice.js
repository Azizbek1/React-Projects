import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'

import { client } from '../../api/client'

const notificationsAdapter = createEntityAdapter({
  sortCompare: (a, b) => b.date.localeCompare(a.date)
})

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotification = selectAllNotifications(getState())
    const [latestNotification] = allNotification
    const latestTimestamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    )
    return response.notifications
  }
)

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      Object.values(state.entities).forEach((n) => {
        n.read = true
      })
    }
  },
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      Object.values(state.entities).forEach((n) => {
        n.isNew = !n.read
      })
      notificationsAdapter.upsertMany(state, action.payload)
    }
  }
})

export const { allNotificationsRead } = notificationSlice.actions

export default notificationSlice.reducer

export const {
  selectAll: selectAllNotifications
} = notificationsAdapter.getSelectors((state) => state.notifications)
