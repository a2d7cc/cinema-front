import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name] ? MaterialIcons[name] : null

	return IconComponent ? <IconComponent /> : <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
