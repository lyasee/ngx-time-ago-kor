/**
 * Created by lyasee on 14/02/2018.
 */
import { NgModule } from '@angular/core';
import { TimeAgoKorPipe } from './time-ago-kor.pipe';

@NgModule({
  declarations: [TimeAgoKorPipe],
  exports: [TimeAgoKorPipe]
})
export class TimeAgoKorModule {}