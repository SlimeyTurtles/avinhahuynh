function Coin() {
    var height = 1;
    var radius = 2;
    

    return (
        <mesh position={[0, height/2, 0]}>
            <cylinderGeometry args={[radius, radius, height, 32]}/>
            <meshStandardMaterial color="brown" />
        </mesh>
    )
}

export default Coin;