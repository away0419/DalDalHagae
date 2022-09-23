package com.ssafy.a302.serviceimpl;


import org.springframework.stereotype.Service;

import com.ssafy.a302.domain.Users;
import com.ssafy.a302.dto.UsersDto;
import com.ssafy.a302.jwt.CreateJWT;
import com.ssafy.a302.repository.UsersRepository;
import com.ssafy.a302.response.LoginReq;
import com.ssafy.a302.service.RedisService;
import com.ssafy.a302.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService{
	private final UsersRepository usersRep;
	private final CreateJWT createJWT;
	private final RedisService redisService;
	
	@Override
	public boolean existsByKakaoId(String kakaoId) {
		return usersRep.existsByKakaoId(kakaoId);
	}

	@Override
	public UsersDto findByKakaoId(String kakaoId) {
		return new UsersDto(usersRep.findByKakaoId(kakaoId));
	}

	@Override
	public LoginReq login(String kakaoId) {
		LoginReq loginReq = new LoginReq();
		
		if(usersRep.existsByKakaoId(kakaoId)) {
			Users users = usersRep.findByKakaoId(kakaoId);
			String accessToken = createJWT.createAccessToken(users.getUsersSno());
			loginReq.setUsers(users,accessToken);
		}
		
		return loginReq;
	}

	@Override
	public boolean logout(String usersSno, String token) {
		if(redisService.getValues(usersSno).equals(token)) {
			redisService.deleteValues(usersSno);
			return true;
		}
		return false;
	}
	
	
	
	
}