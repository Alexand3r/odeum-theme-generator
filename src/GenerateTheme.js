import React from 'react'

var tabs = (times) => {
	var str = ''
	for (var i = 0; i < times ; i++)
	{ str += '\t'}
	return str
}
var print = function(o, tab) {
	var t = 1 + tab
	var str = ''
	for (var p in o) {
		if (typeof o[p] === 'string') {
			str += tabs(t) + p + ': \'' +  o[p] + '\',\n'
		} else {
			str += tabs(t) + p + ': { \n' + print(o[p], t) + tabs(t) + '},\n'
		}
	}
	return str
}

export const DisplayProps = props => {
	console.log(props)
	return <pre>
		<strong>export const theme</strong> = {'{\n'}
		{print(props, 0)}
			}
	</pre>

}
