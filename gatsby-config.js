/** @format */

module.exports = {
	siteMetadata: {
		title: `Atlassian Cover Letter`,
		description: `A Motivation Letter to Atlassian team, expressing my dream job working there.`,
		author: `@majidzeno`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `blue`,
				// Disable the loading spinner.
				showSpinner: true,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/majidLogo.png`, // This path is relative to the root of the site.
			},
		},
	],
};
