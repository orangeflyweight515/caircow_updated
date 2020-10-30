import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget8(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-8 shadow-1">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
				<div className="">
					
					<Typography className="text-56 font-300 leading-none mt-8">20 <Icon className="text-blue" style={{ fontSize:50,marginLeft:20 }}>desktop_windows</Icon></Typography>
					
					<Typography className="h2">
						<b>Lives Orders</b>
					</Typography>
				</div>

				<div className="py-4 text-16 flex flex-row items-center">
					
					<Typography className="whitespace-no-wrap">Total in progress in service orders</Typography>
				</div>
			</div>
		</Card>
	);
}

export default React.memo(Widget8);
