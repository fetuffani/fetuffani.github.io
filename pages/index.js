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
const neuroSVG = <svg className="MuiSvgIcon-root" viewBox="0 0 161.492 162.732">
<path d="M130.735,68.177c-3.191,0-6.078,1.203-8.338,3.125L98.363,48.78c1.73-2.292,2.796-5.11,2.796-8.197  c0-7.547-6.142-13.686-13.686-13.686c-7.544,0-13.686,6.138-13.686,13.686c0,1.363,0.262,2.658,0.636,3.901L51.472,55.064  c-2.138-3.552-5.992-5.952-10.438-5.952c-6.748,0-12.219,5.471-12.219,12.219c0,6.748,5.471,12.219,12.219,12.219  c2.277,0,4.382-0.665,6.207-1.747l7.143,9.28l-7.192,9.346c-1.813-1.068-3.901-1.721-6.158-1.721  c-6.748,0-12.219,5.471-12.219,12.219s5.471,12.219,12.219,12.219c4.476,0,8.349-2.432,10.478-6.023l22.937,10.574  c-0.39,1.27-0.66,2.59-0.66,3.984c0,7.548,6.141,13.686,13.686,13.686c7.544,0,13.686-6.138,13.686-13.686  c0-3.059-1.043-5.854-2.744-8.134l24.045-22.536c2.252,1.888,5.113,3.07,8.275,3.07c7.144,0,12.952-5.812,12.952-12.952  S137.878,68.177,130.735,68.177z M87.473,107.995c-2.612,0-5.03,0.773-7.104,2.046L66.09,91.486l9.302-4.064  c2.289,4.371,6.817,7.393,12.082,7.393c7.043,0,12.794-5.368,13.536-12.219h16.922c0.27,2.349,1.143,4.499,2.501,6.296  l-24.022,22.51C94.006,109.307,90.905,107.995,87.473,107.995z M74.317,84.692l-10.07,4.399l-6.163-8.009l6.163-8.005l10.095,4.411  c-0.325,1.166-0.554,2.372-0.554,3.641C73.788,82.369,74.007,83.55,74.317,84.692z M76.721,81.129  c0-5.929,4.824-10.752,10.752-10.752S98.225,75.2,98.225,81.129s-4.823,10.753-10.752,10.753S76.721,87.057,76.721,81.129z   M117.931,79.663h-16.922c-0.742-6.852-6.493-12.219-13.536-12.219c-5.235,0-9.741,2.99-12.043,7.321l-9.34-4.082l14.229-18.489  c2.085,1.292,4.525,2.074,7.155,2.074c3.402,0,6.479-1.294,8.876-3.357l24.028,22.521C119.048,75.217,118.195,77.343,117.931,79.663  z M87.473,29.83c5.929,0,10.752,4.823,10.752,10.752c0,5.929-4.823,10.752-10.752,10.752s-10.752-4.823-10.752-10.752  C76.721,34.654,81.544,29.83,87.473,29.83z M75.562,47.187c0.662,1.189,1.455,2.286,2.425,3.223L63.32,69.471l-10.635-4.649  c0.333-1.114,0.567-2.268,0.567-3.491c0-1.254-0.243-2.443-0.596-3.583L75.562,47.187z M49.588,70.041  c0.759-0.745,1.386-1.607,1.93-2.529l9.959,4.354l-5.243,6.813L49.588,70.041z M56.234,83.489l5.243,6.814l-9.998,4.37  c-0.545-0.911-1.179-1.759-1.933-2.491L56.234,83.489z M52.68,104.432c0.338-1.117,0.573-2.28,0.573-3.506  c0-1.252-0.243-2.435-0.593-3.569l10.661-4.66l14.712,19.119c-0.968,0.928-1.765,2.008-2.429,3.183L52.68,104.432z M87.473,132.433  c-5.929,0-10.752-4.823-10.752-10.753c0-5.929,4.824-10.752,10.752-10.752s10.752,4.823,10.752,10.752  C98.225,127.61,93.402,132.433,87.473,132.433z M130.735,92.614c-6.333,0-11.486-5.152-11.486-11.485s5.153-11.485,11.486-11.485  c6.332,0,11.485,5.152,11.485,11.485S137.067,92.614,130.735,92.614z"></path></svg>

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
		header: <div style={cardTitleStyle}>{"Neuro Evolution"}{neuroSVG}</div>,
		caption: "Made this project to explore the capabilities of the genetic evolution using a Neural Network as the gene carrier and the FNA Library as the environment simulation",
		url: "https://github.com/fetuffani/GeneticEvolution",
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