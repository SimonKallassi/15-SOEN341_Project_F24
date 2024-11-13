import Link from 'next/link';

const Home = () => {
    return (
        <div className="split">
                <main style={{ padding: '20px' }}>
                    <section>
                        <h1 className="title">Welcome to <br /><span id="name">PeerEvaluator</span></h1>
                        <h3 className="slogan">Helping you evaluate your peers effectively</h3>
                    </section>
                    <section className="buttons">
                        <Link href="/Login">
                            <button id="start"><span>Get Started</span></button>
                        </Link>
                    </section>
                </main>     
        </div>
    );
};

export default Home;
