import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAre } from '@/components/about/WhoWeAre';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

const About = () => {
    return (
        <div className="min-h-screen">
            <ParticleBackground />
            <Header />
            <main>
                <AboutHero />
                <WhoWeAre />
            </main>
            <Footer />
        </div>
    );
};

export default About;
