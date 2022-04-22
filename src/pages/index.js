import { useState } from "react";
import moment from "moment";
import { BoxComments } from "../components/BoxComments";
import { BoxList } from "../components/BoxList";
import { Header } from "../components/Header";

export default function Home() {
  const [formValue, setFormValue] = useState({
    author: "",
    comments: "",
  });
  const [allComments, setAllComments] = useState([]);
  const initialStateFormValue = {
    author: "",
    comments: "",
  }

  const saveComments = (event, formValue) => {
    event.preventDefault();
    formValue.time = moment().format("LLL");
    setAllComments((comments) => [formValue, ...comments]);
  };


  return (
    <div className="container mx-auto mb-3">
      <Header />
      <BoxComments
        saveComments={saveComments}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <BoxList allComments={allComments} />
    </div>
  );
}
