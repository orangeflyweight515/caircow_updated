import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import { TextField } from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
  } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
	}
}));

function Widget1(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = (date) => {
	  setSelectedDate(date);
	};

	const [dataset, setDataset] = useState('2017');
	const data = _.merge({}, props.data);

	_.setWith(data, 'options.plugins.xLabelsOnTop.fontColor', fade(theme.palette.primary.contrastText, 0.7));
	_.setWith(data, 'options.plugins.xLabelsOnTop.borderColor', fade(theme.palette.primary.contrastText, 0.6));
	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.primary.contrastText);

	return (
		<ThemeProvider theme={contrastTheme}>
			<div className={clsx(classes.root)}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h2" color="textPrimary">
								<b>Dashboard</b> Statistics and more 
							</Typography>							
						</div>
					</FuseAnimate>

					<div className="flex flex-row items-center">
						
					</div>
				</div>
				<div className="p-16 sm:p-24 flex-row justify-between">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h3" color="textPrimary">
								<div style={{ display:'flex',justifyContent:'space-between' }}>
									<b className="h2">Filter by date: </b> 
									<div style={{ background:fade('#FFF',0.3),  height:45,width:'60%',borderRadius:20,marginRight:200, display:'flex',justifyContent:'center',alignItems:'center',fontSize:20 }}>
									
										<b style={{ marginLeft:-100 }}><input type="date" style={{ background:fade('#FFF',0), fontWeight:'bolder',fontSize:18 }}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
										<b>|</b>
										<b style={{ marginRight:-100 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" style={{ background:fade('#FFF',0), fontWeight:'bolder',fontSize:18 }}></input></b>
									</div>
								</div>
							</Typography>
																			
						</div>
					</FuseAnimate>
					
				</div>
			</div>
		</ThemeProvider>
	);
}

export default React.memo(Widget1);
