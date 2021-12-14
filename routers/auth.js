import express from "express";

//middle
import { jwtVerify } from "../servers/middle/jwtVerify";
import { social } from "../servers/middle/socialJoin";
import { tokenError } from "../servers/middle/jwtError";

//controller
import {
  postJoin,
  postLogin,
  postSocialLogin,
  logOut,
  findEmail,
  changePassword,
} from "../servers/controllers/authController";

const router = express.Router();

// 회원가입
router.post("/join", postJoin);

// 로컬 로그인 및 토큰 발급
router.post("/login", postLogin);

// 소셜 로그인 및 토큰 발급
router.post("/access", social, postSocialLogin);

// 토큰 검증
router.get("/user", tokenError, jwtVerify);

// 로그아웃
router.get("/logout", logOut);

// 이메일 찾기
router.post("/findEmail", findEmail);

// 비밀번호 변경
router.post("/user/password/modify", changePassword);

module.exports = router;
