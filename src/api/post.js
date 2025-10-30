import api from "./api.js";


// 게시물 등록
export const registerPost = async () => {
    try {
        const res = await api.post('/posts', {
            locationId,
            locationDetail,
            title,
            content,
            storedLocation,
            status,
            type,
            isPersonal,
            studentId,
            categories
        });
        console.log("registerPost: ", res.data.message, "[게시글 ID: ", res.data.postId, "]");
        
        navigate('/');
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("registerPost 실패");
    }

    return response.data;
};


// 이미지 등록
export const registerPostImage = async (post_id, files) => {
    try {
        const res = await api.post('/posts/'+ post_id + '/images', {
            files
        });
        console.log("registerPostImage: ", res.data);
        
        navigate('/');
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("registerPostImage 실패");
    }

    return response.data;
};


// 게시글 수정
export const modifyPost = async (post_id) => {
    try {
        const res = await api.patch('/posts/'+ post_id, {
            locationId,
            locationDetail,
            title,
            content,
            storedLocation,
            status,
            type,
            isPersonal,
            studentId,
            categories
        });
        console.log("modifyPost: ", res.data);
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPost 실패");
    }

    return response.data;
};


// 게시글 수정
export const modifyPostImage = async (post_id, files) => {
    try {
        const res = await api.patch('/posts/'+ post_id + '/images', {
            files
        });
        console.log("modifyPostImage: ", res.data);
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPostImage 실패");
    }

    return response.data;
};


// 게시물 인계 여부 일괄 수정
export const modifyPosts = async (postIds, status) => {
    try {
        const res = await api.patch('/posts/update', {
            postIds,
            status
        });
        console.log("modifyPosts: ", res.data);
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("modifyPosts 실패");
    }

    return response.data;
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

    return response.data;
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

    return response.data;
};


// 한 게시물 가져오기
export const getPost = async (post_id) => {
    try {
        const res = await api.get('/posts/' + post_id);
        console.log("getPost: ", post_id, " 가져오기 성공");
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPost 실패");
    }

    return response.data;
};


// 모든 게시물 리스트 가져오기
export const getAllPosts = async (page = 1) => {
    try {
        const res = await api.get('/posts', {
            params: { page: page}
        });
        console.log(res.data);
        console.log("getAllPosts: ", "성공");
        
        navigate('/');
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getAllPosts 실패");
    }

    return response.data;
};


// 게시물 목록 필터링 조회
export const getPostsByTags = async ({ page = 1, status, type, locationId, categoryId }) => {
    try {
        const res = await api.get('/posts/tags', {
            params: { 
                page,
                status,
                type,
                location_id: locationId,
                category_id: categoryId
            }
        });

        console.log(res.data);
        console.log("getAllPosts: ", "성공");

        return res.data;
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPostsByTags 실패");
        return null;
    }
};


// 게시물 키워드로 검색
export const getPostsByKeyword = async ({ keyword, page = 1 }) => {
    if (!keyword) { alert("검색어를 입력해주세요."); getAllPosts(); }

    try {
        const res = await api.get('/posts/search', {
            params: { 
                keyword,
                page
            }
        });

        console.log("getPostsByKeyword 성공");
        console.log(res.data);

        return res.data;
    } catch (err) {
        console.error('에러 발생: ', err);
        alert("getPostsByKeyword 실패");
        return null;
    }
};