/* eslint-disable react/prop-types */
import "../Styles/TryAgainDialog.css";

// Importing necessary styles for our dialog
function TryAgainDialog({ showDialog, closeDialog, dialogText }) {
  return (
    <div>
      {/* If showDialog is true, we display the dialog */}
      {showDialog && (
        // This is the backdrop that appears behind the dialog
        <div className="backdrop">
          <dialog open={showDialog} className="dialog">
            {/* This is the text that appears in the dialog */}
            <h2>{dialogText}</h2>

            {/* This is a static text that always appears in the dialog */}
            <p>Please try again.</p>

            {/* This is the button that closes the dialog */}
            <button onClick={closeDialog}>Try Again</button>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default TryAgainDialog;
