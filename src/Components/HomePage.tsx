import Introduction from './Introduction';
import About from './About';
function HomePage() {
    return (
        <header className="flex flex-col items-center justify-center py-20">
                <div className="flex flex-col items-center">
                    <Introduction />
                    <About />
                </div>
                    </header>
    )
}

export default HomePage;