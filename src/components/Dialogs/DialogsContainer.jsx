import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)