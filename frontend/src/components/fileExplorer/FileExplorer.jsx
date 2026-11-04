import { useState } from "react";
import styles from "./file.module.css";

function FileExplorer({ fileData }) {
  const [showChildren, setShowChildren] = useState(false);

  function handleClick(e) {
    console.log(e.target);
    setShowChildren((child) => !child);
  }
  return (
    <>
      <div className={styles.fileContainer}>
        <h5 className={styles.fileName}>
          {" "}
          {fileData.type === "folder"
            ? showChildren
              ? "📂"
              : "📁"
            : "📄"}{" "}
          <span onClick={handleClick}> {fileData.name}</span>{" "}
        </h5>

        {showChildren &&
          fileData?.items?.map((item, idx) => {
            return <FileExplorer key={idx} fileData={item} />;
          })}
      </div>
    </>
  );
}

export default FileExplorer;
