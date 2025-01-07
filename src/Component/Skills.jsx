import useUserData from "./useUserData";

function Skills() {
  var user = useUserData();
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="skills">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "2px #dee2e6" }}
          >
            Skills
          </h1>
          <h1 className="position-absolute text-uppercase word">Skills</h1>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-around">
            {user.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  border: "3px solid #1E2A5E",
                  margin: "10px 2px",
                  padding: "30px",
                  borderRadius: "20px",
                  color:""
                }}
                className="col-lg-3 text-center skill"
              >
                <h3>{skill.name}</h3>
                <p>
                  <strong>Description:</strong> {skill.description}
                </p>
                <p className="level">
                  <strong>Level:</strong> {skill.level}
                </p>
                <div className="pro">
                  <span style={{ left: skill.proficiency,color:"#55679C" }} >
                    {skill.proficiency}
                  </span>
                  <div className="progress">
                    <span style={{ width: skill.proficiency }}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
