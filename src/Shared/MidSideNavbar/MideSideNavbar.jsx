
import Info from "../Info/Info";
const MideSideNavbar = ({infos}) => {
    return (
        <div>
            {
                infos.map(info=><Info key={info.id} info={info}></Info>)
            }
        </div>
    );
};

export default MideSideNavbar;