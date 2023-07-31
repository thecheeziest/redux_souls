const DramaDetail2 = ({charInfoData}) => {
    const {name, cName, cInfo} = charInfoData
    return (
        <>
            <h3>{cName}</h3>
            <em>{name}</em>
            <strong>캐릭터 소개</strong>
            <p>{cInfo}</p>
        </>
    );
};

export default DramaDetail2;