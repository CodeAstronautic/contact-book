import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact } from "../actions";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(addContact(data));
    navigate.push("/");
    console.log(data);
  };
  return (
    <form className="createadd" onSubmit={handleSubmit(onSubmit)} key="id">
      <input type="number" id="id" name="id" placeholder="id" ref={register} />
      <input name="name" ref={register} placeholder="name" />
      <input name="username" ref={register} placeholder="username" />
      <input name="email" ref={register} placeholder="email" />
      <input type="submit" />
    </form>
  );
}
