const VideoCard = () => {
  return (
    <div className="w-full">
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQerZhxF-VUYGsT0-SQZzkvOLSzwtr2m4leNkqFSLhEZISbHRr_LcutTFILAIe5e1bDs&usqp=CAU`}
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 flex gap-3">
        <img
          src="https://as2.ftcdn.net/jpg/03/85/50/01/1000_F_385500115_T8QiYsPeliQ5tE3npwOuJNUfunqFBo1U.jpg"
          alt="Channel"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            Sample YouTube Video Title That May Be Long
          </h3>
          <p className="text-xs text-gray-600">
            Channel Name • 1M views • 2 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
