const DramaDetail3 = ({charInfoData}) => {
    const {cName, ment1, mentby1, ment2, mentby2} = charInfoData;

    return (
        <>
            <em>{cName} 役</em>
            <strong>{ment1}</strong>
            <p>{mentby1}</p>
            <em></em>
            <strong>{ment2}</strong>
            <p>{mentby2}</p>
        </>
    );
};

export default DramaDetail3;