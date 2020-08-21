/** @format */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

type ImageProps = {
	name: string;
};

const Image = ({ name }: ImageProps) => {
	const data = useStaticQuery(graphql`
		query {
			greenmobile: file(relativePath: { eq: "greenmobile.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			quoraLogo: file(relativePath: { eq: "quoraLogo.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jsGod: file(relativePath: { eq: "jsGod.png" }) {
				childImageSharp {
					fluid(maxWidth: 400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			tsGod: file(relativePath: { eq: "tsGod.png" }) {
				childImageSharp {
					fluid(maxWidth: 400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			meInmobile: file(relativePath: { eq: "meInmobile2.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			pyramids: file(relativePath: { eq: "pyramids.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			team3: file(relativePath: { eq: "team3.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			almakinah: file(relativePath: { eq: "almakinah.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			teamboard: file(relativePath: { eq: "teamboard.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			macbook: file(relativePath: { eq: "macbook.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			triangle: file(relativePath: { eq: "triangle2.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			cuteCat: file(relativePath: { eq: "cuteCat.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			majidLogo: file(relativePath: { eq: "majidLogo.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	switch (name) {
		case "greenmobile":
			return (
				<Img fluid={data.greenmobile.childImageSharp.fluid} alt="mobile" />
			);
		case "quoraLogo":
			return (
				<Img fluid={data.quoraLogo.childImageSharp.fluid} alt="quoraLogo" />
			);
		case "jsGod":
			return <Img fluid={data.jsGod.childImageSharp.fluid} alt="card" />;
		case "tsGod":
			return <Img fluid={data.tsGod.childImageSharp.fluid} alt="card" />;
		case "meInmobile":
			return <Img fluid={data.meInmobile.childImageSharp.fluid} alt="mobile" />;
		case "pyramids":
			return <Img fluid={data.pyramids.childImageSharp.fluid} alt="pyramids" />;
		case "team3":
			return <Img fluid={data.team3.childImageSharp.fluid} />;
		case "almakinah":
			return <Img fluid={data.almakinah.childImageSharp.fluid} />;
		case "teamboard":
			return <Img fluid={data.teamboard.childImageSharp.fluid} />;
		case "macbook":
			return <Img fluid={data.macbook.childImageSharp.fluid} />;
		case "triangle":
			return <Img fluid={data.triangle.childImageSharp.fluid} />;
		case "cuteCat":
			return <Img fluid={data.cuteCat.childImageSharp.fluid} />;
		case "majidLogo":
			return <Img fluid={data.majidLogo.childImageSharp.fluid} />;
		default:
			return <div>Image</div>;
	}
};

export default Image;
