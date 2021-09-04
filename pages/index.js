import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/WebAsset';
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

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="/">
				FMT Portifolio
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		// backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
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
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'rgba(255, 255, 255, .15) !important',
		backdropFilter: 'blur(8px)',

		// background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.50))',
		background: 'linear-gradient(45deg, rgba(0,0,0,0.15) 40%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.15) 60%)',
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

const cards = [
	{
		header: "Financial Calculator",
		caption: "Webapp to calculate some personal finances such as income and stocks profit taxes.",
		url: "https://calcfin.vercel.app",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: "Blog",
		caption: "I do often blog about what I'm thinking, doing or about to do! (not yet released)",
		// url: "https://fetuffani.vercel.app",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: "GitHub",
		caption: "Checkout some of my coding projects!",
		url: "https://github.com/fetuffani/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: "Youtube channel",
		caption: "",
		// url: "/",
		// image: "https://source.unsplash.com/random"
	},
	{
		header: "LinkedIn Profile",
		caption: "",
		url: "https://www.linkedin.com/in/fetuffani/",
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
							<div className={classes.heroButtonMargin}>
								<Grid container spacing={2} justifyContent="center">
									<Grid item>
										<Button className={classes.heroButton} variant="contained" color="primary">
											Contact
										</Button>
									</Grid>
									{/* <Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid> */}
								</Grid>
							</div>
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
					<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
						Built with Material-UI
					</Typography>
					<Copyright />
				</footer>
				{/* End footer */}
			</React.Fragment>
		</>
	);
}