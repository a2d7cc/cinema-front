import { NextPage } from 'next'
import React from 'react'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <div>ProfilePage</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage
