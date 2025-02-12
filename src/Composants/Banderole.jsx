import "../style/Banderole.scss"

function Banderole({image, texte})
{
    return (
        <div className="banderole p-r">
            <img src={image} className='w100'/>
            <div className='calque w100 flex algni-ctr jc-ctr p-a'><p>{texte}</p></div>
        </div>
    );
}

export default Banderole;