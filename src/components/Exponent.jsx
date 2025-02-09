
const Exponent = ({ num, exponent}) => {
    
    let superscript= ""
    {/* correct superscript */ }
    switch (num){
        case 2: 
            superscript = '²'
            break;
        case 3: 
            superscript = '³'
            break;
        case 4: 
            superscript = '⁴'
            break;
        case 5: 
            superscript = '⁵'
            break;
        case 6: 
            superscript = '⁶'
            break;
    }

    const multiplication = Array(num).fill(`${exponent}`);
    
    return (
        <div className="exponent-counter-container">
        
            <p className="exponent-label">
                {exponent}{superscript}
            </p>
            <p className="exponent-result">
                    {/* Use map to show exponent * repeated 'exponent' times */}
                    {multiplication.map((mul, index) => (
                    <span key={index}>{mul} * </span>
                ))} = {Math.pow(num, exponent)}
            </p>
        </div>
    );
};

export default Exponent;

// {numbers.map((num) => (
//     <Exponent key={num} num={num} exponent={count} />
//   ))}


