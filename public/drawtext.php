<?php
$video = "input.mp4";
$output = "final_reel.mp4";
$text = "Work hard, success will come";

// FFmpeg ka complex command
// Ye command video par text draw karega
$cmd = "ffmpeg -i $video -vf \"drawtext=text='$text':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=60:fontcolor=white\" -codec:a copy $output";

exec($cmd);
echo "Video Rendered!";
?>