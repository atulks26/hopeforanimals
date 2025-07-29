import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RemoveHashOnLoad() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash) {
            navigate(location.pathname, { replace: true });
        }
    }, []);

    return null;
}

export default RemoveHashOnLoad;
