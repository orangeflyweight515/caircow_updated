import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import { Avatar } from '@material-ui/core';

function AnalyticsDashboardApp() {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<div className="w-full">
			<Widget1 data={widgets.widget1} />

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">						

						<div className="flex flex-col sm:flex sm:flex-row pb-20">
							<div className="widget flex w-full sm:w-1/4 p-10">
								<Widget2 data={widgets.widget2} />
							</div>

							<div className="widget flex w-full sm:w-1/4 p-10">
								<Widget3 data={widgets.widget3} />
							</div>

							<div className="widget w-full sm:w-1/4 p-10">
								<Widget4 data={widgets.widget4} />
							</div>

							<div className="widget w-full sm:w-1/4 p-10">
								<Widget5 data={widgets.widget5} />
							</div>
							
						</div>

						<div className="flex flex-col sm:flex sm:flex-row pb-20">
							<div className="widget w-full sm:w-1/4 p-10">
								<Widget6 data={widgets.widget6} />
							</div>

							<div className="widget w-full sm:w-1/4 p-10">
								<Widget7 data={widgets.widget7} />
							</div>

							<div className="widget w-full sm:w-1/4 p-10">
								<Widget8 data={widgets.widget8} />
							</div>
							<div className="widget w-full sm:w-1/4 p-10">
								<Widget9 data={widgets.widget9} />
							</div>
						</div>
						
						<div className="flex flex-col sm:flex sm:flex-row p-10" >
							<div className="p-10 sm:w-1/1.2 rounded-8 shadow-1">
								<div style={{ borderBottomWidth:2 , borderColor:'#ddd5d5', paddingLeft:15, paddingRight:15, paddingBottom:8 }}>
									<span className="h1" style={{ fontWeight:700 }}>Recent Activities</span>
									<a> View All</a>
									<Icon style={{ textAlign:'right',width:'52%',fontSize:27 }}>expand_more</Icon>
								</div>
								<div style={{ display:'flex', borderBottomWidth:2, borderColor:'#ddd5d5',padding:20 }} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Avatar></Avatar>
									</div>
									<div style={{ marginLeft:20 }}>
										<p style={{ fontWeight:'bolder' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</p>
										<span style={{ color:'gray' }}>5 day ago</span>
									</div>

								</div>

								<div style={{ display:'flex', borderBottomWidth:2, borderColor:'#ddd5d5',padding:20 }} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Avatar></Avatar>
									</div>
									<div style={{ marginLeft:20 }}>
										<p style={{ fontWeight:'bolder' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</p>
										<span style={{ color:'gray' }}>5 day ago</span>
									</div>

								</div>

								<div style={{ display:'flex', borderBottomWidth:2, borderColor:'#ddd5d5',padding:20 }} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Avatar></Avatar>
									</div>
									<div style={{ marginLeft:20 }}>
										<p style={{ fontWeight:'bolder' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</p>
										<span style={{ color:'gray' }}>5 day ago</span>
									</div>

								</div>

								<div style={{ display:'flex', borderBottomWidth:2, borderColor:'#ddd5d5',padding:20 }} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Avatar></Avatar>
									</div>
									<div style={{ marginLeft:20 }}>
										<p style={{ fontWeight:'bolder' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</p>
										<span style={{ color:'gray' }}>5 day ago</span>
									</div>

								</div>

								<div style={{ display:'flex',padding:20 }} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Avatar></Avatar>
									</div>
									<div style={{ marginLeft:20 }}>
										<p style={{ fontWeight:'bolder' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</p>
										<span style={{ color:'gray' }}>5 day ago</span>
									</div>

								</div>
							</div>

							<div className="rounded-8 shadow-1 p-10" style={{ marginLeft:24,width:'40%' }}>
								<div style={{ borderBottomWidth:2 , borderColor:'#ddd5d5', paddingLeft:15, paddingRight:15, paddingBottom:8 }}>
									<span className="h1" style={{ fontWeight:700 }}>Useful Quick Links</span>
									<Icon style={{ width:'43%',textAlign:'right' }}>expand_more</Icon>
								</div>
								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>list</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Common Site Setting</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>peoples</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage website users</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>layers</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage Categories</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>shuffle</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage sub categories</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>email</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage jobs request</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>headset_mic</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage Searvice Request</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>message</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage Job dispute</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>message</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage service dispute</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>cloud_circle</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage Service Commissions</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

								<div style={{ display:'flex',paddingTop:15,paddingLeft:15,paddingRight:15, justifyContent:'space-between'}} >
									<div style={{ display:'flex',itemItem:'center' }}>
										<Icon style={{ color:'#6ec5db' }}>cloud_circle</Icon>
										<p style={{ fontWeight:'bolder',marginLeft:20 }}>Manage Escrow Commissions</p>
									</div>
									<div style={{ marginLeft:20 }}>										
										<Icon>navigate_next</Icon>
									</div>

								</div>

							</div>

						</div>
					</div>	
					
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
