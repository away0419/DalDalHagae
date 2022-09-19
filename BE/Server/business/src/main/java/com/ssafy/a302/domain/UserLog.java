package com.ssafy.a302.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Table(name = "USERS_LOG")
public class UserLog {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "USERS_LOG_NO")
	private int userLogNo;
	@Column(name = "USERS_CREATED_AT")
	private Date userCreatedAt;
	@Column(name = "USERS_UPDATED_AT")
	private Date userUpdatedAt;
	@Column(name = "USERS_DELETED_AT")
	private Date userDeletedAt;
	
	@ManyToOne
	@JoinColumn(name="USERS_SNO")
	private Users users;
}
