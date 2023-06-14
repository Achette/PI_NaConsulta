import QueryString from "qs";
import { CLIENT_ID, CLIENT_SECRET } from "../constants/system";
import { Credentials } from "../models/auth";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function loginRequest(loginData: Credentials) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };

  return requestBackend(config)
}
