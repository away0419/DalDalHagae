package com.ssafy.a302.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SnackEffectDto {
	private int snackEffectNo;
	private SnackDto snack;
	private EffectDto effect;
}
