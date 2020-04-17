import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setGroup } from "../features/deputies/deputiesActions";

export default function GroupPage() {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { group, groupLoaded } = useSelector(({ deputies }) => deputies);

  useEffect(() => {
    dispatch(setGroup(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (groupLoaded && group.length === 0) {
      history.push("/");
    }
  }, [dispatch, history, group, groupLoaded]);

  return (
    <div>
      <div>params: {slug}</div>
      {group.map(({ group, fullName }) => {
        return (
          <div>
            {group} - {fullName}
          </div>
        );
      })}
    </div>
  );
}
