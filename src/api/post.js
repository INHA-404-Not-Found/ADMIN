import api from "./api.js";


// 게시물 등록
export const registerPost = async (
    toggleChecked, studentId, categories,
    location, locationDetail, storageLocation, 
    title, content, type 
) => {
    console.log("registerPost start");
    console.log(toggleChecked, studentId, categories,
        location, locationDetail, storageLocation, 
        title, content, type
    );

    if(categories.length == 0) { alert("카테고리를 하나 이상 선택하세요."); return; }
    if(location == -1) { alert("분실/습득 장소를 선택하세요."); return; }
    if(title == "") { alert("제목을 입력하세요."); return; }
    
    var postData;
    if (type== "FIND") {
        postData = {
            locationId: location,
            title: title,
            content: content,
            storedLocation: storageLocation,
            status: "UNCOMPLETED",
            type: type,
            isPersonal: toggleChecked,
            categories: categories
        };

        if (studentId !== '') { postData.studentId = studentId; }
        if (locationDetail !== '') { postData.locationDetail = locationDetail; }

    } else if (type == "LOST") {
        postData = {
            locationId: location,
            title: title,
            content: content,
            status: "UNCOMPLETED",
            type: type,
            categories: categories
        };

        if (locationDetail !== '') { postData.locationDetail = locationDetail; }
    } else { return; }

    
    try {
        const res = await api.post('/posts', postData);

        console.log("registerPost: ", res.data.message, "[게시글 ID: ", res.data.postId, "]");
        alert("『" + title + " 』가 등록되었습니다.");

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("registerPost 실패");
    }
};


// 이미지 등록
export const registerPostImage = async (post_id, files) => {
    try {
        const res = await api.post('/posts/'+ post_id + '/images', {
            files
        });
        console.log("registerPostImage: ", res.data);
        
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("registerPostImage 실패");
    }
};


// 게시글 수정
export const modifyPost = async (post_id, postDetail) => {
    console.log("modifyPost start");
    console.log(postDetail);
    
    try {
        const res = await api.patch('/posts/'+ post_id, postDetail);

        console.log("modifyPost: ", res.data);
        alert("『" + postDetail.title + " 』을 수정하였습니다.");

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPost 실패");
    }
};


// 게시글 이미지 수정
export const modifyPostImage = async (post_id, files) => {
    console.log("modifyPostImage start");
    console.log(files);

    try {
        const res = await api.patch('/posts/'+ post_id + '/images', {
            files
        });

        console.log("modifyPostImage: ", res.data);
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPostImage 실패");
    }
};


// 게시물 인계 여부 일괄 수정
export const modifyPosts = async (postIds, status) => {
    console.log("modifyPosts start");
    console.log(postIds, status);
    
    try {
        const res = await api.patch('/posts/update', {
            postIds: postIds,
            status
        });

        console.log("modifyPosts: ", res.data);

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPosts 실패");
    }

};


// 게시물 단일 삭제
export const removePost = async (post_id) => {
    try {
        const res = await api.delete('/posts/' + post_id);

        console.log("removePost: ", res.data);

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("removePost 실패");
    }
};


// 게시물 일괄 삭제
export const removePosts = async (postIds) => {
    try {
        const res = await api.post('/posts/delete', {
            postIds
        });

        console.log("removePosts: ", res.data);
        
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("removePosts 실패");
    }
};


// 한 게시물 가져오기
export const getPost = async (setPostDetail, post_id) => {
    console.log("getPost start");

    try {
        const res = await api.get('/posts/' + post_id);

        setPostDetail(res.data);
        console.log("getPost: ", res.data);

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPost 실패");
    }
};


// 모든 게시물 리스트 가져오기
export const getAllPosts = async (setPostList, page = 1) => {
    try {
        const res = await api.get('/posts', {
            params: { page: page}
        });

        console.log(res.data);
        console.log("getAllPosts: ", "성공");
        setPostList(res.data);

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getAllPosts 실패");
    }
};


// 게시물 목록 필터링 조회
export const getPostsByTags = async (setPostList, page = 1, status, type, locationId, categoryId) => {
    console.log("getPostsByTags start");
    console.log(status, type);
    
    var FilterData = {
        page: 1,
    };

    if(type != "ALL"){ FilterData.type = type; }
    if(status != ""){ FilterData.status = status; }
    
    try {
        const res = await api.get('/posts/tags', {
            params: FilterData
        });

        setPostList(res.data);
        console.log(res.data);
        console.log("getAllPosts: ", "성공");

    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPostsByTags 실패");
    }
};


// 게시물 키워드로 검색
export const getPostsByKeyword = async (setPostList, keyword, page = 1) => {
    console.log("getPostsByKeyword start: " + keyword);

    if (!keyword) { alert("검색어를 입력해주세요."); }

    try {
        const res = await api.get('/posts/search', {
            params: { 
                keyword: keyword,
                page: page
            }
        });

        console.log("getPostsByKeyword: " + res.data);
        console.log(res.data);

        setPostList(res.data);
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPostsByKeyword 실패");
        return null;
    }
};