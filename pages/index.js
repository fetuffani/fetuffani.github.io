import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CameraIcon from '@material-ui/icons/WebAsset';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PagesIcon from '@material-ui/icons/Pages';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		// backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 0),
		color: 'white !important',
		textShadow: '0px 0px 20px rgba(255, 255, 255, 1)',
	},
	heroButtonMargin: {
		marginTop: theme.spacing(4),
	},
	heroButton: {
		backgroundColor: 'rgba(0, 0, 0, .15) !important',
		backdropFilter: 'blur(80px)',
	},
	cardGrid: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'rgba(255, 200, 200, .15) !important',
		backdropFilter: 'blur(8px)',

		// background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.50))',
		// background: 'linear-gradient(45deg, rgba(0,0,0,0.15) 40%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.15) 60%)',
		backgroundSize: '200% 200%',
		// animation: 'cardBgScroll 200s ease-in-out infinite',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
		textShadow: '0px 0px 14px rgba(0, 0, 0, 1)',
		color: 'white !important',
	},
	cardVisit: {
		textShadow: '0px 0px 14px rgba(0, 0, 0, 1)',
		color: 'white !important',
	},
	footer: {
		// backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
		color: 'white !important',
		textShadow: '0px 0px 20px rgba(255, 255, 255, 1)',
	},
}));


const cardTitleStyle = { display: "flex", alignItems: "center", justifyContent: "space-between" }
const hathorSVG = <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 53 70" aria-hidden="true">
	<path d="M 8.4003906,0 V 44.400391 H 0 V 53 h 8.4003906 10.1992184 7.800782 v -8.599609 h -7.800782 v -1.800782 c 0,-4.4 1.100782,-7.799609 3.300782,-10.099609 2.2,-2.3 5.2,-3.5 9,-3.5 3.8,0 6.8,1.2 9,3.5 2.2,2.3 3.298828,5.699609 3.298828,10.099609 V 70 H 53.300781 V 41 c 0,-6.5 -1.80039,-11.600781 -5.40039,-15.300781 -3.6,-3.7 -8.201172,-5.5 -13.701172,-5.5 -7.2,0 -12.399219,2.901562 -15.699219,8.601562 V 0 Z M 0,61.5 v 8.599609 H 8.4003906 18.599609 26.300781 V 61.5 H 18.599609 8.4003906 Z" />
</svg>

const cards = [
	{
		header: <div style={cardTitleStyle}>{"LinkedIn"}<LinkedInIcon /></div>,
		caption: "My professional LinkedIn page, you can contact me here",
		url: "https://www.linkedin.com/in/fetuffani/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"GitHub"}<GitHubIcon /></div>,
		caption: "Checkout some of my coding projects and get to know some of my dev skills",
		url: "https://github.com/fetuffani/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"Blog"}<PagesIcon /></div>,
		caption: <>{"I do often blog about what I'm thinking, doing or about to do. The blog is not intended to be my portifolio, but a way to write down my thoughts and wills"}<br/>{"(not yet released)"}</>,
		// url: "https://fetuffani.vercel.app",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"Youtube channel"}<YouTubeIcon /></div>,
		caption: "Soon I'll be uploading videos to the community. The channel is under development. Maybe more than one, who knows!",
		// url: "/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"Financial Calculator"}<AttachMoneyIcon /></div>,
		caption: "Webapp to calculate some personal finances such as income and stocks profit taxes",
		url: "https://calcfin.vercel.app",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"Hathor Coin + Unity"}{hathorSVG}</div>,
		caption: "Me and a friend (Mauricio) developed an integration PoC between a game engine and Hathor Coin showing one of the infinite possibilities of cryptocurrency",
		url: "https://medium.com/hathor-network/community-spotlight-unity-integration-b8d890501ec5",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"SphereServer"}<SportsEsportsIcon/></div>,
		caption: "Retired developer of a C++ game server engine used worldwide to create custom gaming experiences among MMO community",
		url: "https://www.sphereserver.com/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"Easy Text Tools"}<TextFieldsIcon/></div>,
		caption: "Simple and easy to use text tools that you can use to tweek your texts!",
		url: "https://fetuffani.github.io/TextToolsWebsite/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"GitForker"}<CallSplitIcon/></div>,
		caption: "A C# tool to fork GitHub repositories locally and keep them updated so forked projects do not pile up your private repositories and keep a copy in case they are removed",
		url: "https://github.com/fetuffani/GitForker",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: <div style={cardTitleStyle}>{"TStream"}<PersonalVideoIcon/></div>,
		caption: "Simple and small video midia server to your in your home network so you can watch your midia without the need to copy from one device to another",
		url: "https://github.com/fetuffani/TStreamMediaServer",
		// image: "https://source.unsplash.com/random"
	},
]

export default function Album() {
	const classes = useStyles();

	return (
		<>
			<React.Fragment>
				<CssBaseline />
				{/* <AppBar position="relative">
				<Toolbar>
					<CameraIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						My Portifolio
					</Typography>
				</Toolbar>
			</AppBar> */}
				<main>
					{/* Hero unit */}
					<div className={classes.heroContent}>
						<Container maxWidth="sm">
							<Typography component="h1" variant="h2" align="center" gutterBottom>
								Felipe Tuffani
							</Typography>
							<Typography variant="h5" align="center" paragraph>
								Front and Backend Developer, Data Scientist and Mechanical Engineer
							</Typography>
							<Typography variant="h6" align="center" paragraph>
								Here you will find some of my works, projects, contacts and ways to get to know me. Feel free to reach me out!
							</Typography>
							{/* <div className={classes.heroButtonMargin}>
								<Grid container spacing={2} justifyContent="center">
									<Grid item>
										<Button className={classes.heroButton} variant="contained" color="primary">
											Contact
										</Button>
									</Grid>
									<Grid item>
										<Button variant="outlined" color="primary">
											Secondary action
										</Button>
									</Grid>
								</Grid>
							</div> */}
						</Container>
					</div>
					<Container className={classes.cardGrid} maxWidth="md">
						{/* End hero unit */}
						<Grid container spacing={4}>

							{cards.map((card) =>
							(
								<Grid item key={1} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										{
											card.image == undefined ? <></> :
												<CardMedia
													className={classes.cardMedia}
													image={card.image}
													title="Image title"
												/>
										}
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{card.header}
											</Typography>
											<Typography>
												{card.caption}
											</Typography>
										</CardContent>
										<CardActions>
											{
												card.url == undefined ? <></> :
													<Button size="small" className={classes.cardVisit} color="primary" href={card.url}>
														Visit
													</Button>
											}

										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</main>
				{/* Footer */}
				<footer className={classes.footer}>
					<Typography variant="h6" align="center" gutterBottom>
						Felipe Tuffani
					</Typography>
					<Typography variant="subtitle1" align="center" component="p">
						Built with Material-UI
					</Typography>
					<Typography variant="body2" align="center">
						{'Copyright © '}
						<Link color="inherit" href="/">
							FMT Portifolio
						</Link>{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>
				</footer>
				{/* End footer */}
			</React.Fragment>
		</>
	);
}