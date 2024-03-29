// Home.tsx
import React, { useEffect, useState } from 'react';
import ConnectWallet from '../components/ConnectWallet';
import ParticleBg from '../components/ParticleBg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const navigate = useNavigate();

    // Use setWalletAddress directly instead of defining setAccount
    // It already matches the expected type React.Dispatch<React.SetStateAction<string>>
    const setAccount = setWalletAddress;
    // console.log(walletAddress)
    useEffect(() => {
        if (walletAddress) {
            navigate('/home');
        }
    }, [walletAddress])

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {/* <ParticleBg /> */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div>
                    <h1 className='hometitle' style={{ color: 'white', fontSize: '5rem', fontFamily: 'Myriad Pro Regular' }} >BlockShare</h1>
                    <ConnectWallet setDetails={setAccount} />
                </div>
                {/* <p>Wallet Address: {walletAddress}</p> */}
            </div>
        </div>
    );
};

export default Home;
