import Column from "../../atoms/column/column";
import Footer from "../../organisms/footer/footer";

import styles from "./aboutContent.module.scss";

const AboutContent = () => {
	return (
		<div id={styles.aboutContent}>
			<Column alignItems="center" justifyContent="center">
				<span className={styles.aboutContentText}>
					Independent Burger & Craft Beer Boat in the centre of
					Bristol. Considered in our approach to all things, we
					carefully source ingredients, supporting small, local
					suppliers to create the Three Brothers Burgers experience –
					a good time, like no other!
				</span>
				<span className={styles.aboutContentText}>
					Our beef, supplied by Bristol-based butcher Ruby and White
					comes from only local West Country farms. Anything vegan is
					created in house by our kitchen team – our plant-based
					(vegan) menu matches in scope to our meat-based offering –
					we invest a lot of development time to create a fully
					inclusive menu - ensuring we are supporting people’s choice
					to a more sustainable diet. Our craft beers and ciders as
					well as our wide variety of spirits are curated from local,
					small-scale breweries and distilleries – we never compromise
					on flavour or taste.
				</span>
				<span className={styles.aboutContentText}>
					Our offering changes often, choice led by our team on the
					floor, so keep an eye on our Instagram or come by to see
					what our taps are offering! Three Bros team up with many of
					our suppliers to hold music led tap takeovers so keep your
					eyes peeled for event dates! Our team are our one of the
					most valued aspects of our business – without them, our
					kitchen and floor lay empty, our speakers lay dormant, and
					our boat lies bare. It is through them; our ethos and our
					identity are brought to life. Joining us on the boat, being
					in amongst the lively atmosphere, our team led music choices
					ranging from the freshest neo soul to dub. We have created
					something incredible which ensures a fun atmosphere for our
					customers but also for our employees!
				</span>
				<span className={styles.aboutContentText}>
					Our offering changes often, choice led by our team on the
					floor, so keep an eye on our Instagram or come by to see
					what our taps are offering! Three Bros team up with many of
					our suppliers to hold music led tap takeovers so keep your
					eyes peeled for event dates! Our team are our one of the
					most valued aspects of our business – without them, our
					kitchen and floor lay empty, our speakers lay dormant, and
					our boat lies bare. It is through them; our ethos and our
					identity are brought to life. Joining us on the boat, being
					in amongst the lively atmosphere, our team led music choices
					ranging from the freshest neo soul to dub. We have created
					something incredible which ensures a fun atmosphere for our
					customers but also for our employees!
				</span>
				<span className={styles.aboutContentText}>
					Our offering changes often, choice led by our team on the
					floor, so keep an eye on our Instagram or come by to see
					what our taps are offering! Three Bros team up with many of
					our suppliers to hold music led tap takeovers so keep your
					eyes peeled for event dates! Our team are our one of the
					most valued aspects of our business – without them, our
					kitchen and floor lay empty, our speakers lay dormant, and
					our boat lies bare. It is through them; our ethos and our
					identity are brought to life. Joining us on the boat, being
					in amongst the lively atmosphere, our team led music choices
					ranging from the freshest neo soul to dub. We have created
					something incredible which ensures a fun atmosphere for our
					customers but also for our employees!
				</span>
			</Column>
			<Footer />
		</div>
	);
};

export default AboutContent;
