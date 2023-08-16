import user from "../data/user";

function Links(){
//const {github, linkedin}= props.links;

return (
    <div>
        <h3>Links</h3>
        <a href={user.links.github}>{user.links.github}</a>
        <a href={user.links.linkedin}>{user.links.linkedin}</a>
    </div>
);
}
export default Links;