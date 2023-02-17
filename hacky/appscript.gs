function getVideoDetails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // Start from row 2, assuming row 1 contains headers.
  var numRows = sheet.getLastRow() - 1;  // Number of rows to process.
  var dataRange = sheet.getRange(startRow, 1, numRows, 1);  // Get the range of data in column A.
  var data = dataRange.getValues();  // Get the values of the range.

  var apiKey = 'AIzaSyDrYB5im2DTqB6ufDx5AClsBmH50oJgtwM'; // Your YouTube API key.
  var baseUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet';  // Base URL for YouTube API requests.

  for (var i = 0; i < data.length; i++) {
    var videoId = data[i][0].split('=')[1];  // Get the video ID from the URL.
    var url = baseUrl + '&id=' + videoId + '&key=' + apiKey;  // Build the API request URL.
    var response = UrlFetchApp.fetch(url);  // Send the API request.
    var json = response.getContentText();  // Get the response as JSON.
    var data = JSON.parse(json).items[0].snippet;  // Extract the video details from the JSON response.

    var title = data.title;  // Get the video title.
    var creator = data.channelTitle;  // Get the channel name.
    var creatorId = data.channelId;  // Get the channel ID.
    var channelThumbnail = getChannelThumbnail(channelId);
    var staticImage = data.thumbnails.high.url;  // Get the URL of the video's static image.
    var dynamicImage = data.thumbnails.maxres.url;  // Get the URL of the video's dynamic image.
    var description = data.description;  // Get the video description.

    // Write the video details to the sheet.
    sheet.getRange(startRow + i, 2).setValue(videoId);
    sheet.getRange(startRow + i, 3).setValue(title);
    sheet.getRange(startRow + i, 4).setValue(creator);
    sheet.getRange(startRow + i, 5).setValue(channelThumbnail);
    sheet.getRange(startRow + i, 6).setValue(staticImage);
    sheet.getRange(startRow + i, 7).setValue(dynamicImage);
    sheet.getRange(startRow + i, 8).setValue(description);
  }
}


function processVideos() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  var range = sheet.getDataRange();
  var values = range.getValues();
  for (var i = 1; i < values.length; i++) {
    var videoId = values[i][0];
    var videoDetails = getVideoDetails(videoId);
    var row = [videoDetails._id, videoDetails.title, videoDetails.creator, videoDetails.creatorImage, videoDetails.categoryName, videoDetails.staticImage, videoDetails.dynamicImage, videoDetails.description];
    sheet.getRange(i+1, 1, 1, row.length).setValues([row]);
  }
}