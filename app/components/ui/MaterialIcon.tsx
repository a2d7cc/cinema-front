import { TypeMaterialiconName } from '@/shared/types/icons.types'
import * as MaterialIcons from 'react-icons/md'
import React, { FC } from 'react'

const MaterialIcon:FC<{name: TypeMaterialiconName}> = ({name}) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator /> 
}

export default MaterialIcon