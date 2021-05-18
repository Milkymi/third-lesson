import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className={"dis-footer"}>
         <FooterLogo />
         <FooterMenu />
         <Copyright />
        </div>
    );
}

export default Footer;