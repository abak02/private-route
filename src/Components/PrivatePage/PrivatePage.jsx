import React, { useContext } from "react";
import { userContext } from "../../App";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PrivatePage = () => {
  const [loggedInUser,setLoggedInUser, handleSignOut] = useContext(userContext);

  return (
    <div>
      <h2>This is private page</h2>
      <p>Welcome, {loggedInUser.name}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        corporis voluptate totam harum consequuntur velit minima ducimus
        perferendis aliquam laborum? Dignissimos beatae sapiente odio alias
        voluptatum architecto ab provident odit consectetur nostrum vitae
        tenetur quis temporibus, sit, debitis facere itaque a modi voluptatem
        delectus illum! Voluptate necessitatibus ducimus saepe et vero magni cum
        beatae fugit reiciendis adipisci minima laborum pariatur earum tenetur,
        ipsam animi aliquam voluptates odio ex laudantium eveniet veniam.
        Consequatur laudantium impedit reiciendis ipsum officia dolore laborum
        voluptates exercitationem vitae quibusdam itaque culpa, tempora, error
        accusamus labore expedita voluptas facere animi autem aperiam magnam
        possimus totam? Hic, inventore.
      </p>
      <button onClick={handleSignOut}>
        <FontAwesomeIcon
          style={{ color: "#1cc7c1" }}
          icon={faArrowRightFromBracket}
        />
        Log Out
      </button>
    </div>
  );
};

export default PrivatePage;
