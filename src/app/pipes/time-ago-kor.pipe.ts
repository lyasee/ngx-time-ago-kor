import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoKor'
})
export class TimeAgoKorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.transferTime(value);
  }

  now: any = new Date();
  postTime: any;

  /**
   * mysql
   * @param time 
   */
  timeSubstring(time){
    let times = time.toString();
    let sYear = times.substring(0,4);
    let sMonth = times.substring(5,7)-1;
    let sDate = times.substring(8,10);
    let sHour = Number(times.substring(11,13))+9; // UTC+09:00 = 우리시간
    let sMin = times.substring(14,16);
    let sSecond = times.substring(17,19);

    return new Date(sYear,sMonth,sDate,sHour,sMin,sSecond);
  }

  /**
   * 게시물의 시간을 받아 몇일 전, 몇초 전을 반환한다.
   * @param time 
   */
  transferTime(time){

    if(time == null || time == undefined) return "알수없음";

    this.postTime = this.timeSubstring(time);
    let pastSecond = (this.now - this.postTime)/1000;

    let year;
    let month;
    let date;
    let hour;
    let min;
    let str = "";

    let restSecond = 0;
    if(pastSecond > 31536000){
      year = Math.floor(pastSecond / 31536000);
      str = year + "년 전";
    }else if(pastSecond > 2592000){
      month = Math.floor(pastSecond / 2592000);
      str = month + "달 전";
    }else if(pastSecond > 86400){
      date = Math.floor(pastSecond / 86400);
      str = date + "일 전";
    }else if(pastSecond > 3600){
      hour = Math.floor(pastSecond / 3600);
      str = str + hour + "시간 전";
    }else if(pastSecond > 60){
      min = Math.floor(pastSecond / 60);
      str = str + min + "분 전";
    }else{
      str = "몇초 전";
    }

    return str;
  }


}
